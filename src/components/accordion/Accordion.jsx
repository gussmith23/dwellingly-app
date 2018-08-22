import React, { Component } from 'react';

import './Accordion.scss';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionOpen: true
    }
    this.handleClosingAccordion = this.handleClosingAccordion.bind(this);
  }

  handleClosingAccordion() {
    this.setState(prevState => ({ accordionOpen: !prevState.accordionOpen }))
  }

  render() {
    return (
      <div className="admin__accordion">
        <div className="accordion__label" onClick={this.handleClosingAccordion} role="presentation">
          New Retention Assignments (4)
        </div>
        {this.state.accordionOpen ?
          <div className="accordion__body">
            <table>
              <tbody>
                <tr>
                  <td>Tenant Name</td>
                  <td>Meerkat Manor<br/> Property Manager Name</td>
                  <td>Outreach Name</td>
                  <td>
                    <select>
                      <option>Retention Name</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Tenant Name</td>
                  <td>Meerkat Manor<br/> Property Manager Name</td>
                  <td>Outreach Name</td>
                  <td>
                    <select>
                      <option>Retention Name</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Tenant Name</td>
                  <td>Meerkat Manor<br/> Property Manager Name</td>
                  <td>Outreach Name</td>
                  <td>
                    <select>
                      <option>Retention Name</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Tenant Name</td>
                  <td>Meerkat Manor<br/> Property Manager Name</td>
                  <td>Outreach Name</td>
                  <td>
                    <select>
                      <option>Retention Name</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button" className="btn btn--lg">Save Assignments</button>
          </div>
        : null}
      </div>
    )
  }
}

export default Accordion;
