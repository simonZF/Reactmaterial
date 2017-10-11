import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Loading from "../Common/loading";

const newsUrl = 'https://bird.ioliu.cn/joke/rand?type=text';
const listStyle = {
    "marginBottom":40
}
export default class ListExampleChat extends React.Component{
    constructor(){
        super();
        this.state = {
            datalist:[]
        }
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        fetch(newsUrl).then(res => {
            return res.json();
        }).then(res => {
            setTimeout(()=>{
                this.setState({
                    "datalist":res.data
                })
            },1000);
        })
    }
    render(){
        const arr = [];
        this.state.datalist.forEach((item,index)=>{
            arr.push(<ListItem
              primaryText={item.content}
              key={index}
              leftAvatar={<Avatar src="http://www.material-ui.com/images/chexee-128.jpg" />}

            />
            );
        });
        if(arr.length == 0){
            arr.push(<Loading/>);
        }

        return(
            <List style={listStyle}>
              <Subheader>附近的新闻</Subheader>
              {arr}

            </List>
        )
    }
}
