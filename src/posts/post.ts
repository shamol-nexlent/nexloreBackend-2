interface Ipost
{
    "id": number|string,
    "title": string,
    "description": string,
    "createdAt": object,
    "createdBy":  number
}

const postArray:Ipost[]=[
    {id:1,title:"title1",description:"lorem lorem",createdAt:{},createdBy:1},
    {id:2,title:"title1",description:"lorem lorem",createdAt:{},createdBy:2},
    {id:3,title:"title1",description:"lorem lorem",createdAt:{},createdBy:3},
    {id:4,title:"title1",description:"lorem lorem",createdAt:{},createdBy:4}
]

const getPost=(postId:number)=>{
    if (!postId) {
        return null;
    } else {
        const gettingPost=postArray.filter(post=>post.id===postId)
        return gettingPost;
    }
}


const findPost=(postId:number)=>{
    if (!postId) {
        return null;
    } else {
        const findingPost=postArray.filter(post=>post.id===postId)
        return findingPost;
    }
}

console.log("findPOst 1",findPost(1));

const GettingAllPost = (): Ipost[] => {
    return postArray;
}
console.log(GettingAllPost);

const postIdToRemove = 3;
export const removepost = (postId: number)=>{
   const removeElement= postArray.filter(user => user.id === postId);
   return removeElement;
}

console.log(removepost(postIdToRemove));
   