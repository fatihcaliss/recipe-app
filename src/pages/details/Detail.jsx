import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import detailstyle from "./detail.module.css";

const Detail = () => {
    const { label } = useParams();
    const { state } = useLocation()
    return (
        <div>
            <h1 className={detailstyle['detail-header']}>{label}</h1>
            <div className={detailstyle["details"]}>
                <div>
                    <img src={state.recipe.image} alt={state.recipe.label} />
                </div>

                <div className={detailstyle["nutrients"]}>
                    <h3>Nutrients</h3>
                    <ul className={detailstyle["besin"]}>
                        <li><span>Energy : </span>{state.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(0)} kcal</li>
                        <li><span>Fat : </span>{state.recipe.totalNutrients.FAT.quantity.toFixed(0)} kcal</li>
                        <li><span>Carbs : </span>{state.recipe.totalNutrients.CHOCDF.quantity.toFixed(0)} kcal</li>
                        <li><span>Protein : </span>{state.recipe.totalNutrients.PROCNT.quantity.toFixed(0)} kcal</li>
                        <li><span>Cholesterol : </span>{state.recipe.totalNutrients.CHOLE.quantity.toFixed(0)} kcal</li>
                    </ul>
                </div>
                <div className='recipe'>
                    <ol>
                        {
                            state.recipe.ingredientLines.map((e, i) => {
                                return <li key={i}> {e}</li>
                            })
                        }
                    </ol>
                </div>

            </div>

        </div>
    )
}

export default Detail