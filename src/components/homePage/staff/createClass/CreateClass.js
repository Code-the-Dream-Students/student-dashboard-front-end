import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import _ from "lodash";
import {
	// Card,
	Tabs,
	Row,
	Col,
} from "antd";

import * as ROUTES from "../../../../constants/routes";
// import { StyledSectionStaff, StyledDiv } from "../../assignments/styles";
// import CreateAssignments from '../../assignments/staff/CreateAssignments';
// import Courses from '../../assignments/staff/courses/Courses';
// import Units from '../../assignments/staff/Units';
// import Lessons from '../../assignments/staff/Lessons';
// import Resources from '../../assignments/staff/Resources';
import { StyledSectionStaff, StyledDiv } from "../styles";
import Assignments from './assignments/Assignments';
import Courses from './courses/Courses';
import Units from './units/Units';
import Lessons from './lessons/Lessons';
import Resources from './resources/Resources';
import PrivateRoute from '../../../routes/PrivateRoute';

const { TabPane } = Tabs;

const CreateClass = ({ match, history }) => {

	// const [state, setState] = useState({
	// 	key: 'tab1',
	// 	noTitleKey: 'app',
	// })

	// const { key, noTitleKey } = state;

	// const onTabChange = (key, type) => {
	// 	console.log(key, type);
	// 	setState({ [type]: key });
	// };

	const [courses, setCourses] = useState([]);
	const [units, setUnits] = useState([]);
	const [lessons, setLessons] = useState([]);
	const [resources, setResources] = useState([]);
	const [assignments, setAssignments] = useState([]);

	useEffect(() => {
		let unmounted = false;

		fetch(process.env.REACT_APP_GET_COURSES)
			.then(response => response.json())
			.then(data => {
				if (!unmounted) {
					setCourses(data);

					const weeks = data.reduce((acc, curr) => {
						return [...acc, ...curr.weeks];
					}, [])

					setAssignments(weeks)
				}
			})
			.catch(console.error);

		fetch(`${process.env.REACT_APP_API_ROOT}/units`)
			.then(response => response.json())
			.then(data => {
				if (!unmounted) setUnits(data.units);
			})
			.catch(console.error);

		fetch(`${process.env.REACT_APP_API_ROOT}/lessons`)
			.then(response => response.json())
			.then(data => {
				if (!unmounted) setLessons(data.lessons);
			})
			.catch(console.error);

		fetch(`${process.env.REACT_APP_API_ROOT}/sources`)
			.then(response => response.json())
			.then(data => {
				if (!unmounted) setResources(data.sources);
			})
			.catch(console.error);

		return () => { unmounted = true };
	}, []);

	return (
		<div className="container-fluid">
			<Row gutter={[16, 24]}>
				<Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={18}>
					<StyledDiv>
						<StyledSectionStaff>
							<div className="card-container">
								<Tabs
									type="card"
									style={{ overflow: "auto" }}
									defaultActiveKey={history.location.pathname}
								// onChange={key =>
								// 	console.log(key)
								// }
								// tabBarGutter={0}
								>
									{/* <TabPane tab={<Link to={`${match.path}${ROUTES.CREATE_ANNOUNCEMENTS}`}>Announcements</Link>} key="/home/classes/announcements">
										<div className="card-content">
											<PrivateRoute
												exact
												path={`${match.path}${ROUTES.ASSIGNMENTS}`}
												history={history}
												component={CreateAssignments}
											/>
										</div>
									</TabPane> */}

									{/* <TabPane 
										tab={ <Link style={{ padding: "15px 15px" }} to={`${match.path}${ROUTES.CREATE_COURSES}`}>Courses</Link> }  */}
									<TabPane
										tab={<Link /* style={{ padding: "15px 15px" }} */
											to={`${match.path}${ROUTES.CREATE_COURSES}`}>Courses</Link>}
										key="/home/classes/courses"
										style={{ height: "fit-content", width: "fit-content", minWidth: '1000px', minHeight: '1000px' }}
									>
										{/* <div className="card-content">
											<PrivateRoute
												exact
												path={`${match.path}${ROUTES.CREATE_COURSES}`}
												component={Courses}
												courses={courses}
											/>
										</div> */}
										{/* <div> */}
										<PrivateRoute
											exact
											path={`${match.path}${ROUTES.CREATE_COURSES}`}
											component={Courses}
											courses={courses}
										/>
										{/* </div> */}
									</TabPane>

									<TabPane
										tab={<Link style={{ padding: "15px 15px" }}
											to={`${match.path}${ROUTES.CREATE_UNITS}`}>Units</Link>}
										key="/home/classes/units"
										style={{ height: "fit-content", width: "fit-content", minWidth: '1000px', minHeight: '1000px' }}
									>
										<div className="card-content">
											<PrivateRoute
												exact
												path={`${match.path}${ROUTES.CREATE_UNITS}`}
												component={Units}
												units={units}
											/>
										</div>
									</TabPane>

									<TabPane
										tab={<Link style={{ padding: "15px 15px" }}
											to={`${match.path}${ROUTES.CREATE_LESSONS}`}>Lessons</Link>}
										key="/home/classes/lessons"
										style={{ height: "fit-content", width: "fit-content", minWidth: '1000px', minHeight: '1000px' }}
									>
										<div className="card-content">
											<PrivateRoute
												exact
												path={`${match.path}${ROUTES.CREATE_LESSONS}`}
												component={Lessons}
												lessons={lessons}
											/>
										</div>
									</TabPane>

									<TabPane
										tab={<Link style={{ padding: "15px 15px" }}
											to={`${match.path}${ROUTES.CREATE_RESOURCES}`}>Resources</Link>}
										key="/home/classes/resources"
										style={{ height: "fit-content", width: "fit-content", minWidth: '1000px', minHeight: '1000px' }}
									>
										<div className="card-content">
											<PrivateRoute
												exact
												path={`${match.path}${ROUTES.CREATE_RESOURCES}`}
												component={Resources}
												resources={resources}
											/>
										</div>
									</TabPane>

									<TabPane
										tab={
											<Link
												style={{ padding: "15px 15px" }}
												to={`${match.path}${ROUTES.ASSIGNMENTS}`}
											>
												Assignments
											</Link>
										}
										key="/home/classes/assignments"
										style={{ height: "fit-content", width: "fit-content", minWidth: '1000px', minHeight: '1000px' }}
									>
										<div className="card-content">
											<PrivateRoute
												path={`${match.path}${ROUTES.ASSIGNMENTS}`}
												match={match}
												history={history}
												component={Assignments}
												assignments={assignments}
											/>
										</div>
									</TabPane>

									{/* <TabPane tab={<Link to={`${match.path}${ROUTES.STUDENTS}`}>Students</Link>} key="/home/classes/students">
										<div className="card-content">
											<PrivateRoute
												exact
												path={`${match.path}${ROUTES.ASSIGNMENTS}`}
												component={CreateAssignments}
											/>
										</div>
									</TabPane> */}

									{/* <TabPane tab={<Link to={`${match.path}${ROUTES.ADD_MENTORS}`}>Mentors</Link>} key="/home/classes/mentors">
										<div className="card-content">
											<PrivateRoute
												exact
												path={`${match.path}${ROUTES.ASSIGNMENTS}`}
												component={CreateAssignments}
											/>
										</div>
									</TabPane> */}

								</Tabs>
							</div>
						</StyledSectionStaff>
					</StyledDiv>
				</Col>
			</Row >
		</div >
	)
}

export default CreateClass;