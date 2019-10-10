import React, { Component } from 'react';
import cvService from '../services/cv-service';
import CvList from './_list';
import defaultData from '../defaultData';

class Temp extends Component {
    state = {
        cv: defaultData
    }

    componentDidMount() {
        console.log("DATA", defaultData);
        // cvService.getData().then(data => {
        //     this.setState({ cv: data });
        // })
    }
    render() {
        return (
            <div class="container bg-white m-auto p-5 d-flex flex-column">
                <div class="d-flex flex-column">
                    <h2 class="pl-4 py-2 text-uppercase title">Driton Berisha</h2>
                    <div class="px-4 py-2">
                        <p>
                            A full-stack JS developer with working knowledge of PHP, Java and system engineering, Driton is also
                            familiar with Agile project execution and loves developing new products.
                    </p>
                    </div>
                    <div class="d-flex flex-row px-4 py-2">
                        <div class="col">
                            <h3 class="font-weight-light">Highlights</h3>
                            <CvList list={this.state.cv.highlights}/>
                        </div>
                        <div class="col">
                            <h3 class="font-weight-light">Skills</h3>
                            <CvList list={this.state.cv.skills}/>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <h2 class="pl-4 py-2 text-uppercase title">Experience</h2>
                    <div class="d-flex flex-column px-4 py-2">
                        <div class="d-flex col justify-content-between">
                            <h4 class="text-uppercase">Polymath labs | software DEVELOPER</h4>
                            <h4 class="text-uppercase">DEC 2017 - PRESENT</h4>
                        </div>
                        <div class="d-flex col flex-column">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                            <p>
                                <b>Technologies:</b> JS, NodeJS, serverless, React JS, MySQL, DynamoDB
                        </p>
                        </div>
                    </div>
                    <div class="d-flex flex-column px-4 py-2">
                        <div class="d-flex col justify-content-between">
                            <h4 class="text-uppercase">Fleksio | software DEVELOPER</h4>
                            <h4 class="text-uppercase">JUN 2017 - DEC 2017</h4>
                        </div>
                        <div class="d-flex col flex-column">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                            <p>
                                <b>Technologies:</b> PHP, Laravel, MySQL
                        </p>
                        </div>
                    </div>
                    <div class="d-flex flex-column px-4 py-2">
                        <div class="d-flex col justify-content-between">
                            <h4 class="text-uppercase">Fleksio | software DEVELOPER</h4>
                            <h4 class="text-uppercase">JUN 2017 - PRESENT</h4>
                        </div>
                        <div class="d-flex col flex-column">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                            <p>
                                <b>Technologies:</b> PHP, Laravel, MySQL
                        </p>
                        </div>
                    </div>
                    <div class="d-flex flex-column px-4 py-2">
                        <div class="d-flex col justify-content-between">
                            <h4 class="text-uppercase">Fleksio | software DEVELOPER</h4>
                            <h4 class="text-uppercase">JUN 2017 - PRESENT</h4>
                        </div>
                        <div class="d-flex col flex-column">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                            <p>
                                <b>Technologies:</b> PHP, Laravel, MySQL
                        </p>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <h2 class="pl-4 py-2 text-uppercase title">Certifications, recognitions, and accomplishments</h2>
                    <div class="d-flex flex-row px-4 py-2">
                        <div class="col">
                            <h2 class="font-weight-light">Freelance Projects</h2>
                            <ul class="p-0">
                                <li><i class="far fa-check-square"></i> 3 years of PHP development experience</li>
                                <li><i class="far fa-check-square"></i> Full stack developer, PHP/Java, Js/jQuery, MySQL,
                                Systems</li>
                                <li><i class="far fa-check-square"></i> Agile delivery experience</li>
                            </ul>
                        </div>
                        <div class="col">
                            <h2 class="font-weight-light">Certifications</h2>
                            <ul class="p-0">
                                <li><i class="far fa-check-square"></i> PHP, Laravel Framework, CodeIgniter</li>
                                <li><i class="far fa-check-square"></i> jQuery(JavaScript), HTML5, CSS3, Bootstrap</li>
                                <li><i class="far fa-check-square"></i> MySQL, MongoDB, Redis</li>
                                <li><i class="far fa-check-square"></i> Git, GitLab, GitHub, Bitbucket, Asana, Jira</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <h2 class="pl-4 py-2 text-uppercase title">Education</h2>
                    <div class="d-flex flex-row px-4 py-2">
                        <div class="col">
                            <ul class="p-0">
                                <li><i class="fas fa-university"></i> Computer science - Software Engineering, Bachelors, UBT
                                University - 2015</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Temp;