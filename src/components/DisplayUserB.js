import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Image, Media, Row } from 'react-bootstrap';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

class DisplayUserB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
  }

  //   userInfo = () => {
  //     return this.props.state.userData;
  //   };
  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
      )
      .then(res => this.setState({ userData: res.data }));
    // const { userData: userInfo, company, address } = this.state;
  }

  render() {
    // const userInfo = this.state.userData;
    const { userData: userInfo, company } = this.state;

    // const company = this.state.userInfo.company;
    // console.log(this.state.userData?.company?.name);
    return (
      <div>
        <Container>
          <Card bg='dark' text='white' style={{ marginTop: '20px' }}>
            <Card.Header>
              <h5>{userInfo.name}</h5>
            </Card.Header>

            <Card.Body>
              <Media>
                {/* <Col xs={6} md={4}> */}
                <Image
                  src='https://cdn3.iconfinder.com/data/icons/miniman-vol-1/65/_Cool_Tough_Guy-512.png'
                  roundedCircle
                  width={100}
                  height={100}
                  className='mr-3'
                  thumbnail
                />
                <Media.Body>
                  <h5>{userInfo?.username || 'debugger'}</h5>
                  {/* <Container> */}
                  <Card.Text>
                    {userInfo?.email}
                    <br />
                    {userInfo?.website}
                    <br />
                    {userInfo?.phone}
                    <br />
                  </Card.Text>
                  {/* </Container> */}
                  <Media>
                    <WorkRoundedIcon />
                    <Media.Body>
                      <Card.Text>
                        {userInfo?.company?.name}
                        <br />

                        <p className='text-white-50 bg-dark'>
                          {userInfo?.company?.catchPhrase}
                        </p>
                      </Card.Text>
                    </Media.Body>
                  </Media>
                  <Media>
                    <HomeRoundedIcon />
                    <Media.Body>
                      <p>
                        {userInfo?.address?.street}, {userInfo?.address?.suite}
                        <br />
                        {userInfo?.address?.city},
                        <br />
                        {userInfo?.address?.zipcode}
                        <br />
                        <div className='text-white-50 bg-dark'>
                          <RoomOutlinedIcon />
                          {userInfo?.address?.geo?.lat}
                          {'   '}
                          {userInfo?.address?.geo?.lat}
                        </div>
                      </p>
                    </Media.Body>
                  </Media>
                </Media.Body>
                {/* </Col> */}
              </Media>
              {/* <Container>
                <Card.Text>
                  {userInfo.email}
                  <br />
                  {userInfo.website}
                </Card.Text>
              </Container> */}
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default DisplayUserB;
