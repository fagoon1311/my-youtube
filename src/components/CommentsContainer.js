import React from 'react'

const commentsData = [
    {
    username:"Fagoon Sharma",
    text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
    replies:[]
    },
    {
    username:"Fagoon Sharma",
    text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
    replies:[{
        username:"Fagoon Sharma",
        text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
        replies:[]
        },]
    },
    {
    username:"Fagoon Sharma",
    text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
    replies:[{
        username:"Fagoon Sharma",
        text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
        replies:[]
        },
        {
            username:"Fagoon Sharma",
            text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
            replies:[]
            },
            {
                username:"Fagoon Sharma",
                text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
                replies:[
                    {
                        username:"Fagoon Sharma",
                        text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
                        replies:[]
                        },
                        {
                            username:"Fagoon Sharma",
                            text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
                            replies:[ {
                                username:"Fagoon Sharma",
                                text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
                                replies:[]
                                }, {
                                    username:"Fagoon Sharma",
                                    text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
                                    replies:[ {
                                        username:"Fagoon Sharma",
                                        text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
                                        replies:[]
                                        }, {
                                            username:"Fagoon Sharma",
                                            text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
                                            replies:[]
                                            }]
                                    },]
                            }
                ]
                },]
    },
    {
    username:"Fagoon Sharma",
    text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
    replies:[{
        username:"Fagoon Sharma",
        text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
        replies:[]
        },]
    },
    {
    username:"Fagoon Sharma",
    text:"Lorem Ipsum falana dhimkana pata nahi kya likhna hai bas likh dia",
    replies:[]
    },
]

const Comment = ({ data }) => {
    const { username, text, replies } = data;
    return(
    <div className='flex  bg-gray-100 rounded-md'>
        <img className="w-12 h-12" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"></img>
        <div className='px-3'>
            <p className='font-bold'>Name</p>
            <p>{text}</p>
        </div>

    </div>
    )
} 

const CommentList = ({ comment }) =>{
    return comment.map((comment, index)=> (
        <div>
        <Comment key={index} data={comment}/>
        <div className='pl-5 border border-l-black ml-5 py-1 '>
            <CommentList comment={comment.replies}/>
        </div>
        </div>
    ))
    
    
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold'>Comment Section:</h1>
        <CommentList comment={commentsData}/>
    </div>
  )
}

export default CommentsContainer