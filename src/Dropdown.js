import React from 'react';
 
const Dropdown = () => {
    return (
        <div>
            <h1>Dropdown</h1>
            <row>
                <div className='col-12 bg-primary blue' >
                        <h1>DROPDOWN</h1>
                        <form>
  <div className="form-row align-items-center">
    <div className="col-auto my-1">
      <label className="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="col-auto my-1">
      <div className="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" className="custom-control-input" id="customControlAutosizing"></input>
        <label className="custom-control-label" for="customControlAutosizing">Remember my preference</label>
      </div>
    </div>
    <div className="col-auto my-1">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
                </div>
            </row>
        </div>
    );
};
 
export default Dropdown;