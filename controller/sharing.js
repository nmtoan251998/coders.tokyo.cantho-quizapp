const data = require('../models/posts');
module.exports.getSharing = (req,res)=>{
    const maxPostsInPerPage = 4;
    let dataPosts = [];

    const page= parseInt(req.query.page) || 1;
    const maxOfPosts = data.length;
    const amountOfPage = maxOfPosts/maxPostsInPerPage;
    let start = (page-1)*maxPostsInPerPage;
    let end = page*maxPostsInPerPage - 1;
    dataPosts = data.slice(start,end);
    console.log(dataPosts);

    res.render('pages/sharing',{data: dataPosts, amountOfPage: amountOfPage, current: page});
}