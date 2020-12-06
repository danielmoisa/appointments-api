import React, { useContext, useState } from "react";
import {
	Row,
	Col,
	Avatar,
	Tooltip,
	Dropdown,
	Menu,
	Drawer,
	Button,
	message,
} from "antd";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import AppointmentForm from "../components/AppointmentForm";

import "../scss/Header.scss";
import { UserContext } from "../../context/UserContext";

const Header = () => {
	const [toggleDrawer, setToggleDrawer] = useState(false);
	const { isAuth, loggedUser } = useContext(UserContext);
	const history = useHistory();

	const handleLogout = () => {
		localStorage.removeItem("appointments_management_login_token");

		message.info({
			content: "Logged out with success",
			duration: 3,
			style: {
				bottom: "30px",
				right: "30px",
			},
		});
		history.push("/");
	};

	const adminMenu = (
		<Menu>
			<Menu.Item onClick={handleLogout}>Logout</Menu.Item>
			<Menu.Item>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="http://www.taobao.com/">
					2nd menu item
				</a>
			</Menu.Item>
			<Menu.Item>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="http://www.tmall.com/">
					3rd menu item
				</a>
			</Menu.Item>
		</Menu>
	);

	const showDrawer = () => {
		setToggleDrawer(true);
	};

	const closeDrawer = () => {
		setToggleDrawer(false);
	};

	return (
		<Row className="admin-header">
			<Col sm={16} md={16} className="menu"></Col>
			<Col sm={8} md={8} className="user-info">
				<Tooltip title="Add appointment">
					<Button
						type="primary"
						shape="circle"
						icon={<PlusOutlined />}
						onClick={showDrawer}
						className="appointments-btn"
					/>
				</Tooltip>
				<Dropdown
					overlay={adminMenu}
					placement="bottomLeft"
					trigger={["click"]}>
					<Tooltip placement="left" title="Admin menu">
						<Avatar
							icon={<UserOutlined />}
							className="admin-avatar"
						/>
					</Tooltip>
				</Dropdown>

				{/* Appointments drawer */}
				<Drawer
					title="Add manual appointment"
					placement="right"
					closable={true}
					onClose={closeDrawer}
					visible={toggleDrawer}
					className="appointments-drawer">
					<AppointmentForm closeDrawer={closeDrawer} />
				</Drawer>
			</Col>
		</Row>
	);
};

export default Header;
