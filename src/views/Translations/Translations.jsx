/*!

=========================================================
* Now UI Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/* eslint-disable */
import React from "react";
import '../../assets/css/translations.css'
// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { MERGE_LANGUAGE_CHANGES } from "../../actions/translations";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class Translations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changes: {},
      translationsArray: undefined,
      isMainLanguage: false,
      showEntries: 200,
      showEntriesProperties: [100, 200, 300],
      activePageEntries: 1,
      firstSliceArg: 0
    }
  };

  componentDidMount() {
    this.props.getLanguages()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedLanguage && nextProps.baseLanguage) {
      this.createLanguagesArray(nextProps.selectedLanguage, nextProps.baseLanguage);
      this.state.isMainLanguage = nextProps.selectedLanguage.tag === "en";
      console.log(nextProps.selectedLanguage.tag, "en", nextProps.selectedLanguage.tag === "en");
    }
  }

  createLanguagesArray(selected, base) {
    var changes = this.state.changes;
    var translations = selected.translations;
    var selected_updates = selected.updated;
    var base_updates = base.updates;
    var base_translations = base.translation;

    var trans = Object.entries({...translations}).reduce(
      (acc, [key, value]) => {
        if (!base_translations[key]) {
          return acc;
        } else if (changes[key]) {
          return acc.concat({ shownKey: base_translations[key], key, value, missing: false, edited: true, outdated: false, class: "edited-translation" })
        } else if (selected_updates[key] && selected_updates[key] < base_updates[key]) {
          return acc.concat({ shownKey: base_translations[key], key, value, missing: false, edited: false, outdated: true, class: "outdated-translation" })
        } else {
          return acc.concat({ shownKey: base_translations[key], key, value, missing: false, edited: false, outdated: false })
        }
      },
      [],
    ).sort((a,b) => (a.class || !b.class) ? -1 : ((b.class || a.class) ? 1 : 0));

    var keys = Object.keys(base_translations);
    for (let i = 0; i < keys.length; i++) {
      var key = keys[i]
      if (!{...translations}[key]) {
        trans.unshift({ shownKey: base_translations[key], key, value: "", missing: true, edited: false, outdated: false, class: "missing-translation" });
      }
    }

    this.state.translationsArray = trans;
  }

  addNewLanguage() {
    var tag = prompt("Enter language short code");
    var display_name = prompt("Enter language display name");

    if (!tag || !display_name) {
        alert("Please fill both values");
        return;
    }

    for(let i = 0; i < this.props.languages.length; i++) {
      const lang = this.props.languages[i];
      if (lang.tag === tag) {
          alert("Such language already exists")
          return;
      }
    }

    this.props.createLanguage(tag, display_name);
  }

  addNewKey() {
    var key = prompt("Enter new translation KEY");

    if (!key) {
        return;
    }

    if (this.props.selectedLanguage.translations[key]) {
        alert("Such key already exists");
        return;
    }

    this.updateTranslationsArray(undefined, key, undefined);
  }

  deleteAKey() {
    var accepted = confirm("This action can not be reverted!");

    if (accepted) {
      alert("deleted")
    }

  }

  buildClassForKey(value) {
    if (value.edited) {
      return "edited-translation";
    } else if (value.new) {
      return "new-translation";
    } else if (value.missing) {
      return "missing-translation";
    } else if (value.outdated) {
      return "outdated-translation";
    } else {
      return "";
    }
  }

  updateTranslationsArray = (index, key, value) => {
    var state = this.state;
    var translationsArray = state.translationsArray;

    var i = index !== undefined ? index : translationsArray.unshift({
      shownKey: key, key, value, missing: false, edited: true, outdated: false, new: true, class: "new-translation"
    })-translationsArray.length;

    translationsArray[i].value = value;

    var changes = state.changes;
    changes[key] = value;
    if (this.props.selectedLanguage.translations[key] === changes[key] || !changes[key]) {
      translationsArray[i].edited = false;
      delete changes[key];
    } else {
      translationsArray[i].edited = true;
    }
    translationsArray[i].class = this.buildClassForKey(translationsArray[i]);

    this.setState(state);
  }

  resetChanges() {
    var state = this.state;
    state.changes = {};
    this.setState(state);
    this.createLanguagesArray(this.props.selectedLanguage, this.props.baseLanguage);
  }

  onTranslationsChange = (index, key) => (e) => {
    this.updateTranslationsArray(index, key, e.target.value);
  }

  onSelectLanguage(e) {
    this.props.getLanguage(e.target.value);
  }

  commitChanges(changes) {
    this.props.patchLanguage(this.props.selectedLanguage.id, changes);
    this.props.dispatch({
      type: MERGE_LANGUAGE_CHANGES,
      data: changes
    });
    this.setState({ changes: {} });
  }

  confirmOutdated = (key) => () => {
    this.commitChanges({
      [key]: this.props.selectedLanguage.translations[key],
    });
  };

  onClickSave() {
    this.commitChanges(this.state.changes);
  }

  onClickReset() {
    this.resetChanges();
  }

  getPaginatorBtns() {
    let btnsArr = [];
    let numberOfBtns = Math.ceil(this.state.translationsArray ? this.state.translationsArray.length/this.state.showEntries : 0);
    for(let i = 1; i <= numberOfBtns; i++) {
      btnsArr.push(i);
    }
    return btnsArr;
  }
  setActivePage(active){
    this.setState({
      ...this.state,
      activePageEntries: active
    })
  }
  nextPageClick(){
    let allBtn = this.getPaginatorBtns();
    this.setState({
      ...this.state,
      activePageEntries: allBtn.length === this.state.activePageEntries ? this.state.activePageEntries : this.state.activePageEntries + 1,
    })
  }
  prevPageClick(){
    let allBtn = this.getPaginatorBtns();
    this.setState({
      ...this.state,
      activePageEntries: this.state.activePageEntries === 1 ? this.state.activePageEntries : this.state.activePageEntries - 1
    })
  }
  getSliceArr(){
    let lastBtnCheck = this.getPaginatorBtns().length;
    let firstSliceArg;
    let secondSliceArg;
    if(this.state.activePageEntries === 1) {
      firstSliceArg = 0;
      secondSliceArg = firstSliceArg + this.state.showEntries;
    }
    else if (this.state.activePageEntries === lastBtnCheck) {
      firstSliceArg = this.state.showEntries*(this.state.activePageEntries - 1);
      secondSliceArg = this.state.translationsArray.length - 1
    }
    else  {
      firstSliceArg = this.state.showEntries*(this.state.activePageEntries - 1);
      secondSliceArg = firstSliceArg + this.state.showEntries;
    }
    let sliceArr = [firstSliceArg, secondSliceArg];
    return sliceArr;
  }
  setShowEntries(value){
    this.setState({
      ...this.state,
      activePageEntries: 1,
      showEntries: value
    })
  }

  render() {
    return (
      <>
        <div className="content content-top">
          <Row>
          <Col xs={12}>
            <div className='align-leng-choose'>
              <Card style={{boxShadow: "none"}}>
                <div style={{background: '#edf4f9'}}>
                <CardBody className="table-full-width response-card">
                  <div style={
                    {
                      height: "54px",
                    }
                  }>
                  <Row>
                    <Col xs={3} >
                      <div className='wrapper-languages'>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          color="dropdown-initial"
                          className='dropdown-response'
                        >
                           {this.props.selectedLanguage && this.props.selectedLanguage.display_name}
                          <i className="fpp-icon-caret-r dropdown-icon dp_icon"/>
                        </DropdownToggle>
                        <DropdownMenu className='lang-select' >
                          {this.props.languages.map((value, index) => {
                            return <DropdownItem onClick={this.onSelectLanguage.bind(this)} key={index} value={value.id}>{value.display_name}</DropdownItem>
                          })}

                          <DropdownItem className='new-lang-kay' size="sm"  onClick={this.addNewLanguage.bind(this)}>Add new language</DropdownItem>
                          <DropdownItem className='new-lang-kay' size="sm"  disabled={!this.state.isMainLanguage} onClick={this.addNewKey.bind(this)}>Add new key</DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                      </div>
                    </Col>
                    <Col xs={9} className='align-save-reset-btns'>
                      <div className='btn-save-reset-wrap'>
                      <Button className='save-reset-btn' size="sm" color="link" disabled={!Object.keys(this.state.changes).length} onClick={this.onClickSave.bind(this)}>Save</Button>
                      <div className='btn-separator'></div>
                      <Button className='save-reset-btn'  size="sm" color="link" onClick={this.onClickReset.bind(this)}>Reset</Button>
                      </div>


                    </Col>
                  </Row>
                  </div>
                </CardBody>
                </div>
                {
                  /*
                <CardHeader>
                  <CardTitle tag="h4">
                    {this.props.querying &&
                    <i className="fpp-icon-spinner spinner"/>
                    } Pick a language
                  </CardTitle>
                </CardHeader>
                  */
                }

              </Card>
            </div>
            <div className="translations-heder-separator"></div>
            </Col>
            {this.state.translationsArray &&
              <Col xs={12}>
                <Card className="table-align">
                  <CardBody className="table-full-width table-full-width-align">
                    <div className='lang-naw-wrapper'>
                      <div className='entries-navbar'>
                        <span>Show </span>
                          <UncontrolledDropdown>
                            <DropdownToggle className='dropdown-entries-btn'>
                              {this.state.showEntries}
                              <i className="fpp-icon-caret-r dropdown-icon dp_icon"/>
                            </DropdownToggle>
                          <DropdownMenu>
                            {this.state.showEntriesProperties.map((item, index)=><DropdownItem onClick={()=>this.setShowEntries(item)} kay={index}>{item}</DropdownItem>)}
                          </DropdownMenu>
                          </UncontrolledDropdown>
                        <span> entries</span>
                      </div>
                      <div className='entries-sort'>
                        <span>Sort </span>
                        <UncontrolledDropdown>
                          <DropdownToggle className='dropdown-entries-btn'>
                            Recently changed
                            <i className="fpp-icon-caret-r dropdown-icon dp_icon"/>
                          </DropdownToggle>
                          <DropdownMenu>
                            Recently changed
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </div>
                    <Table responsive>
                      <tbody>
                        {
                          this.state.translationsArray.slice(this.getSliceArr()[0],this.getSliceArr()[1]).map((prop, index) => {
                            return (
                              <tr key={index}>
                                <td className='td-content-align td-content-align-border' width="50%">{prop.shownKey}</td>
                                <td className='td-content-align'>
                                  <textarea  placeholder="Missing translation" className={prop.class + " max-width"} value={prop.value} onChange={this.onTranslationsChange(index, prop.key)} />
                                </td>
                                {this.state.isMainLanguage &&
                                  <td width="115">
                                    <Button color="danger" disabled={!this.state.isMainLanguage} onClick={this.deleteAKey.bind(this)}>Delete</Button>
                                  </td>
                                }
                                {prop.outdated &&
                                  <td width="115">
                                    <Button color="success" onClick={this.confirmOutdated(prop.key)}>Done</Button>
                                  </td>
                                }
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </Table>
                  </CardBody>
                  <div className="languages-bottom-nav">
                    <div className="open-page-info">
                      <span>{`Showing ${this.state.activePageEntries} ${this.state.activePageEntries === this.getPaginatorBtns().length ? '' : `to ${this.state.activePageEntries + 1}`} of ${this.getPaginatorBtns().length} entries`}</span>
                    </div>
                    <div className="entries-paginator">
                      <button  onClick={()=> this.prevPageClick()}>Previous</button>
                      <div className='paginator-pages-wrapper'>
                        {this.getPaginatorBtns().map((item) => <span
                            className={`${item === this.state.activePageEntries ? 'active-entres-page' : null} entries-pages`}
                            onClick={() => this.setActivePage(item)} key={item}>{item}</span>)}
                      </div>
                      <button onClick={()=>this.nextPageClick()}>Next</button>
                    </div>
                  </div>
                </Card>
              </Col>
            }
          </Row>
        </div>
      </>
    );
  }
}

export default Translations;
