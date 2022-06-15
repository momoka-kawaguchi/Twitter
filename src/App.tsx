import styled from 'styled-components';
import React from 'react';

const A = [
  {
    title : "ももちゃん🍑@momochanjazz",
    content : "React勉強しなきゃ、、"
  },
  {
    title : "M.E@valorant",
    content : "バロラント最高！"
  },  
  {
    title : "おせんべい@ricecookie",
    content : "お腹すいたなあ…🥺"
  },
  {
    title : "a",
    content : "あいうえお"
  },
  {
    title : "b",
    content : "かきくけこ"
  },
]

const App = () => {
  return (
      <div className="App">
        <h1>Twitter🕊</h1>
        {
          A.map(t => <Tweet
            title={t.title}
            content={t.content}
          />)
        }
      </div>
  );
};

const abc = {
  title : "ももちゃん🍑@momochanjazz",
  content : "React勉強しなきゃ、、"
}

interface TodoProps {
  title: string
}
interface TweetProps {
  title: string
  content: string
}


const Todo: React.FC<TodoProps> = (props) => {
  const [completed, setCompleted] = React.useState(false);
  return (
    <label onClick={() => setCompleted(prev => !prev)}>
      {completed ? '♡' : props.title}
    </label>
  )
};


const Tweet: React.FC<TweetProps> = (props) => {
  return (
    <StyledArticle>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <StyledArticle2>
       <Todo title="❤️" />
       </StyledArticle2>
    </StyledArticle>
  )
};


export default App;

const StyledArticle = styled.article`
  background-color: #fff;
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 16px;

  h2 {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.9);
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.9);
  }
  h2 {
`;

const StyledArticle2 = styled.div`
margin:'auto';
width:'50%'
`;