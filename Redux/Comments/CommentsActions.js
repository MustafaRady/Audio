import axios from "axios";
import { CommentsActions } from "./CommentsReducer";

export const getComments=()=> async (dispatch)=>{
    dispatch(CommentsActions.getCommentsRequest())
    try{
        const response = await axios.get('https://dummyjson.com/comments');

        const comments = response.data.comments.slice(0,10);
        const array_UsersAndComments = [];

        for(let i=0 ;i<comments.length;i++){
            const user = await getUserOfComment(comments[i].user.id );
            array_UsersAndComments.push({
                user:user.firstName+" "+user.lastName,
                comment:comments[i].body,
                rate: Math.floor(Math.random() * 5) +1 ,
                image:user.image,
                Month:Math.floor(Math.random() *5) +1
            })

        } 
        array_UsersAndComments.sort((a, b) => a.Month - b.Month);
        dispatch(CommentsActions.getCommentsSuccess(array_UsersAndComments))
    }catch(error){
        console.log(error)
    }
}

const getUserOfComment = async (id)=>{
    try{
        const response = await axios.get(`https://dummyjson.com/users/${id}`);
        let user = response.data;
        return user 
    }catch(error){
        console.log(error)
    }
}