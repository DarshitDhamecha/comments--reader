import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

    comments = [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
            "postId": 1,
            "id": 4,
            "name": "alias odio sit",
            "email": "Lew@alysha.tv",
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        },
        {
            "postId": 1,
            "id": 5,
            "name": "vero eaque aliquid doloribus et culpa",
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        },
        {
            "postId": 2,
            "id": 6,
            "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
            "email": "Presley.Mueller@myrl.com",
            "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
        },
        {
            "postId": 2,
            "id": 7,
            "name": "repellat consequatur praesentium vel minus molestias voluptatum",
            "email": "Dallas@ole.me",
            "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
        },
        {
            "postId": 2,
            "id": 8,
            "name": "et omnis dolorem",
            "email": "Mallory_Kunze@marie.org",
            "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
        },
        {
            "postId": 2,
            "id": 9,
            "name": "provident id voluptas",
            "email": "Meghan_Littel@rene.us",
            "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
        },
        {
            "postId": 2,
            "id": 10,
            "name": "eaque et deleniti atque tenetur ut quo ut",
            "email": "Carmen_Keeling@caroline.name",
            "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
        }
    ]

    constructor() {
        super();
        this.state = {
            comments: this.comments,
            loading: false,
            currentPage: 1,
            commentsPerPage: 10,
        }
    }

    async componentDidMount() {
        try {
            let Url = "https://jsonplaceholder.typicode.com/comments";
            let data = await fetch(Url);
            let parsedData = await data.json();
            this.setState({ comments: parsedData });
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }

    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        })
    }

    render() {

        const { comments, currentPage, commentsPerPage } = this.state;

        const indexOfLastComment = currentPage * commentsPerPage;
        const indexOfFirstComment = indexOfLastComment - commentsPerPage;
        const currentComment = comments.slice(indexOfFirstComment, indexOfLastComment);

        const pageNumbers = [];
        let i = 1;
        for (i; i <= Math.ceil(comments.length / commentsPerPage); i++) {
            pageNumbers.push(i);
        };


        return (
            <div className='m-3'>
                <h2 className='text-center my-3 fs-2'>Top Comments</h2>
                <div className='h-[2px] w-100 bg-gray-500'></div>
                <div className='row justify-center'>
                    {currentComment.map((element) => {
                        return <div className='col-md-4' key={element.id}>
                            <NewsItems name={element.name} body={element ? element.body.slice(0, 100) : ""} id={element.id} email={element.email} commentId={element.postId} />
                        </div>
                    })}
                </div>
                <nav aria-label="..." className='my-3 flex w-100 overflow-scroll gap-1 my-Scroll'>
                    {pageNumbers.map((number) => (
                        <ul key={number} class="pagination pagination-sm">
                            <li class="page-item"><a class="page-link" href="#" id={number} onClick={this.handleClick}>{number}</a></li>
                        </ul>
                    ))}
                </nav>
            </div>
        )
    }
}

export default News
