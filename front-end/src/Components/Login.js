import React, { Component } from "react";
import "./Login.scss";
import { connect } from "react-redux";
import {handleLoginApi} from "../ApiServices/api" 
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
			password:'',
    };
  }
  componentDidMount() {}
  DeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };

  Login=async()=>{
    let status=await handleLoginApi(this.state.email,this.state.password)
    console.log("iiii", status)
  }

  ChangeEmail=(event)=>{
    let a=event.target.value;
    this.setState({
      email:a
    })
  }

  ChangePassword=(event)=>{
    let b=event.target.value;
    this.setState({
      password:b
    })
  }
  render() {
    let {email,password} = this.state
    let dataRedux = this.props.dataRedux;
    return (
      <>
        <div>
          {dataRedux &&
            dataRedux.length > 0 &&
            dataRedux.map((item, index) => {
              return (
                <div>
                  {index + 1}---{item.name}{" "}
                  <span onClick={() => this.DeleteUser(item)}>x</span>
                </div>
              );
            })}
        </div>
        <div class="container">
          <div class="screen">
            <div class="screen__content">
              <div class="login">
                <div class="login__field">
                  <i class="login__icon fas fa-user"></i>
                  <input
                    type="text"
                    class="login__input"
                    value={email}
                    placeholder="User name / Email"
                    onChange={(event)=>this.ChangeEmail(event)}
                  />
                </div>
                <div class="login__field">
                  <i class="login__icon fas fa-lock"></i>
                  <input
                    type="password"
                    class="login__input"
                    placeholder="Password"
                    value={password}
                    onChange={(event)=>this.ChangePassword(event)}
                  />
                </div>
                <button class="button login__submit" onClick={()=>this.Login()}>
                  <span class="button__text">Log In Now</span>
                  
                </button>
              </div>
              <div class="social-login">
                <div class="social-icons">
                  <a href="#" class="social-login__icon fab fa-instagram"></a>
                  <a href="#" class="social-login__icon fab fa-facebook"></a>
                  <a href="#" class="social-login__icon fab fa-twitter"></a>
                </div>
              </div>
            </div>
            <div class="screen__background">
              <span class="screen__background__shape screen__background__shape4"></span>
              <span class="screen__background__shape screen__background__shape3"></span>
              <span class="screen__background__shape screen__background__shape2"></span>
              <span class="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
