import React from 'react';

interface CardContent {
  title: string;
  content: string;
}

function Card({ title, content }: CardContent) {
  //pseudo code
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">{title}</p>
      </div>
      <div className="card-body">
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
}

export default Card;
