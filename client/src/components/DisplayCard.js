import React from 'react';

const DisplayCard = props => {
  return(
    <div className="item-card">
      <h2>{props.itemInfo.name}</h2>
      <dl>
        <dt>Course Type:</dt>
        <dd>{props.itemInfo.course}</dd>
        <dt>Technique:</dt>
        <dd>{props.itemInfo.technique}</dd>
        <dt className="full-width">Ingredients:</dt>
        <dd>
          <ul>
            {
              props.itemInfo.ingredients.map( (ingredient, i) => {
                return <li key={'ingredient-'+i.toString().padStart(2,'0')}>{ingredient}</li>
              })
            }
          </ul>
        </dd>
      </dl>
    </div>
  )
}

export default DisplayCard;