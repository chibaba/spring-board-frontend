import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    getProjectTask,
    addProjectTask,
} from "../../actions/ProjectTaskActions";

class UpdateProjectTask extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            summary: "",
            acceptanceCriteria: "",
            status: "",
            errors: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const { pt_id } = this.props.match.params;
        this.props.getProjectTask(pt_id);
    }
    onSubmit(e) {
        e.preventDefault();
        const UpdatedTask = {
            id: this.state.id,
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status,
        };
        this.props.addProjectTask(UpdatedTask, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
        const {
            id,
            summary,
            acceptanceCriteria,
            status,
        } = nextProps.project_task;
        this.setState({
            id,
            summary,
            acceptanceCriteria,
            status,
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="addProjectTask">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <a
                                    href="/ProjectBoard.html"
                                    className="btn btn-light"
                                >
                                    Back to Board
                                </a>
                                <h6 className="display-6 text-center">
                                    Add /Update Project Task
                                </h6>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={classnames(
                                                "form-control form-control-lg",
                                                {
                                                    "is-invalid":
                                                        errors.summary,
                                                }
                                            )}
                                            name="summary"
                                            placeholder="Project Task summary"
                                            value={this.state.summary}
                                            onChange={this.onChange}
                                        />
                                        {errors.summary && (
                                            <div className="invalid-feedback">
                                                {errors.summary}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control form-control-lg"
                                            placeholder="Acceptance Criteria"
                                            name="acceptanceCriteria"
                                            value={
                                                this.state.acceptanceCriteria
                                            }
                                            onChange={this.onChange}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            className="form-control form-control-lg"
                                            name="status"
                                            value={this.state.status}
                                            onChange={this.onChange}
                                        >
                                            <option value="">
                                                Select Status
                                            </option>
                                            <option value="TO_DO">TO DO</option>
                                            <option value="IN_PROGRESS">
                                                IN PROGRESS
                                            </option>
                                            <option value="DONE">DONE</option>
                                        </select>
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn btn-primary btn-block mt-4"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    project_task: state.project_task.project_task,
    errors: state.errors,
});
UpdateProjectTask.propTypes = {
    project_task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getProjectTask: PropTypes.func.isRequired,
    addProjectTask: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getProjectTask, addProjectTask })(
    UpdateProjectTask
);
