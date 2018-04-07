import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Box from 'grommet/components/Box';

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
            Support
        </a>{' '}

        <Modal open={open} onClose={this.onCloseModal} little>
        <Box direction='row'
          justify='start'
          align='start'
          wrap={true}

          margin='medium'
          colorIndex='light-2'
        >

          <Box direction='row'
            justify='start'
            align='start'
            wrap={true}

            margin='small'
            colorIndex='light-1'
          >
            <Accordion
            active={0}>
              <AccordionPanel heading='First Title'>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Paragraph>
              </AccordionPanel>
              <AccordionPanel heading='Second Title'>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Paragraph>
              </AccordionPanel>
              <AccordionPanel heading='Third Title'>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Paragraph>
              </AccordionPanel>
            </Accordion>
          </Box>
        </Box>

        </Modal>
      </div>
)
}}

HelpList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HelpList);
