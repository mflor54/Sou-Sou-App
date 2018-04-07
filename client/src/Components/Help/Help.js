import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Modal from 'react-responsive-modal';
import Button from 'material-ui/Button';
import './Help.css';


const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(25),
    color: theme.palette.text.secondary,
  },

});



class HelpList extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
    open: false,
    show: false,
    expanded: null,
    };
  }

    onOpenModal = () => {
  this.setState({ open: true });
};

onCloseModal = () => {
  this.setState({ open: false });
};

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded, open } = this.state;

    return (
      <div className="example">
        <a onClick={this.onOpenModal}>
            Help
        </a>{' '}

        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>Simple centered modal</h2>
          <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>General settings</Typography>
                <Typography>I am an expansion panel</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className={classes.secondaryHeading}>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                  maximus est, id dignissim quam.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Users</Typography>
                <Typography className={classes.secondaryHeading}>
                  You are currently not an owner
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                  diam eros in elit. Pellentesque convallis laoreet laoreet.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Advanced settings</Typography>
                <Typography className={classes.secondaryHeading}>
                  Filtering has been entirely disabled for whole web server
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                  eros, vitae egestas augue. Duis vel est augue.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Modal>
      </div>
)
}}

HelpList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HelpList);
