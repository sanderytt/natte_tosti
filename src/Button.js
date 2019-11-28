import React from 'react';

const Button = () => {
    return (
            <div>
                <label htmlFor="exampleFormControlSelect1">Example select</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button type="submit" className="btn btn-primary">Zoeken</button>
            </div>

    );
};

export default Button;