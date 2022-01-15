import React from "react";
import Header from "./Header";
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Breadcrumb, Card } from "react-bootstrap";

const Dashboard = ({ username }) => {
  return (
    <div>
      <Header username={username} />
      <Card className='mt-5 p-3' style={welcomeStyle}>
        <Card.Body>
          <Card.Title>
            Welcome {username}!
          </Card.Title>
          <Card>
            <Card.Body>
            <Card.Title>
              {username}'s Stats
            </Card.Title>
            <Card.Text>
              some stats here
            </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                Upcoming Study Sessions
              </Card.Title>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
};

const welcomeStyle = {
      color: 'white',
      backgroundColor: 'navy',
  }
export default Dashboard;
