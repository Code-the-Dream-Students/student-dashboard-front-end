import React from "react";
import { Card} from "antd";
import { Tabs } from 'antd';
import './students.css'
// import StudentsTable from './StudentsTable'
import StudentsTable from './StudentsTableHooks'

const { TabPane } = Tabs;

const Students = () => {

    const styleCard = {
        background: '#f5f5f5', 
        padding: '0px', 
        border: 'none'
    }

    const styleTabs = {
        background: '#f5f5f5', 
        padding: '0px', 
        height: 930,
        // height: 'auto',
    }

    const styleTabPane = {
        height: 850,
        // height: 'auto',
    }

    
    return(
        <Card style={styleCard}
        type="inner"
        hoverable
        className="cards-border">
            <div  className="card-container">
                <Tabs style={styleTabs} type="card">
                    <TabPane tab="Students" key="1" style={styleTabPane}>
                        <StudentsTable />   
                    </TabPane>
                    <TabPane tab="Tracking Report" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p> 
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p> 
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p> 
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                </Tabs>
            </div>
        </Card>
    )
}

  export default Students;