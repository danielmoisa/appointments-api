import React, { useState } from 'react'
import { Table, Input, Button, Space, Skeleton } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';


const data = [
    {
      key: '1',
      name: 'John Brown',
      status: 'In progress',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      status: 'In progress',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      status: 'Done',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      status: 'Done',
      address: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      name: 'John Brown',
      status: 'In progress',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Joe Black',
      status: 'In progress',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '7',
      name: 'Jim Green',
      status: 'Done',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '8',
      name: 'Jim Red',
      status: 'Done',
      address: 'London No. 2 Lake Park',
    },
    {
      key: '9',
      name: 'John Brown',
      status: 'In progress',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '10',
      name: 'Joe Black',
      status: 'In progress',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '11',
      name: 'Jim Green',
      status: 'Done',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '12',
      name: 'Jim Red',
      status: 'Done',
      address: 'London No. 2 Lake Park',
    },
    {
      key: '13',
      name: 'John Brown',
      status: 'In progress',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '14',
      name: 'Joe Black',
      status: 'In progress',
      address: 'London No. 1 Lake Park',
    },
  ];

const Appointments = () => {
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const [searchInput, setSearchInput]: any = useState('')
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000)

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                setSearchInput(node);
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        render: text =>
          searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
    
      const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        
        setSearchedColumn(dataIndex)
      };
    
     const handleReset = clearFilters => {
        clearFilters();
        setSearchText('')
      };
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: '30%',
          ...getColumnSearchProps('name'),
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          width: '20%',
          filters: [
            {
              text: 'Open',
              value: 'Open',
            },
            {
              text: 'In progress',
              value: 'In progress',
            },
            {
              text: 'Done',
              value: 'Done',
            },
          ],
          onFilter: (value, record) => record.status.indexOf(value) === 0,
          sorter: (a, b) => a.status.length - b.status.length,
          
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          ...getColumnSearchProps('address'),
        },
      ];
    return (
        <div>
            <Skeleton loading={loading} active avatar>
              <Table columns={columns} dataSource={data} pagination={{ position: ['topRight', 'bottomRight'] }} />
            </Skeleton>
        </div>
    )
}

export default Appointments
