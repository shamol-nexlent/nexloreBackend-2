"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removepost = void 0;
const postArray = [
    { id: 1, title: "title1", description: "lorem lorem", createdAt: new Date(), createdBy: 1 },
    { id: 2, title: "title1", description: "lorem lorem", createdAt: new Date(), createdBy: 2 },
    { id: 3, title: "title1", description: "lorem lorem", createdAt: new Date(), createdBy: 3 },
    { id: 4, title: "title1", description: "lorem lorem", createdAt: new Date(), createdBy: 4 }
];
const getPost = (postId) => {
    if (!postId) {
        return null;
    }
    else {
        const gettingPost = postArray.filter(post => post.id === postId);
        return gettingPost;
    }
};
const findPost = (postId) => {
    if (!postId) {
        return null;
    }
    else {
        const findingPost = postArray.filter(post => post.id === postId);
        return findingPost;
    }
};
// console.log("findPOst 1",findPost(1));
const GettingAllPost = (arr) => {
    return arr;
};
console.log(GettingAllPost(postArray));
const postIdToRemove = 3;
const removepost = (postId) => {
    const removeElement = postArray.filter(user => user.id === postId);
    return removeElement;
};
exports.removepost = removepost;
// console.log(removepost(postIdToRemove));
