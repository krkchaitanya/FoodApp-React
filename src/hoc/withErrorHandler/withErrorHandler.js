import React ,{Component} from "react";

import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../Auxiliary";

const withErrorHandler=(WrappedComponent)=>{
    return class extends Component{
        this.state={
            error:null
        }
        componentDidMount() {

            axios.interceptors.request.use(req=>{
                this.setState({
                    error:null
                });
            })

            axios.interceptors.response.use(null,error=>{
                this.setState({
                    error:error
                });
            })
        }

        errorConfirmedHandler=()=>{
            this.setState({
                error:null
            })
        }
        
        render(){
            return(
                <Auxiliary>
                <Modal show={this.state.error}   clicked={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message||null}
                </Modal>
                <WrappedComponent {...this.props}/>
            </Auxiliary>
            )
        }
        
    }
    
}
export default withErrorHandler;