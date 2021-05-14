import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css'
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

class InputItem extends React.Component {
	state = {
		inputValue: ''
	};

	onButtonClick= () => {
	this.setState({
		inputValue: ''
	})

	this.props.onClickAdd(this.state.inputValue);
}


	render() {
		const condition = this.props.hasError;
		let formHelperText;


		if (condition) {
			formHelperText = <FormHelperText 
				id="component-error-text">
				Чушь не неси аааа!
				</FormHelperText>
		} else {
			formHelperText = ''
		}

		return (<Grid
			className={styles.inputBox}> 
			<FormControl error>
			<TextField
				id="filled-dense"
				label="Новое задание"
				margin="dense"
				variant="filled"
				className={styles.inputItem}
				value={this.state.inputValue}
				onChange={event => this.setState({ inputValue: event.target.value.toUpperCase()})}
			/>

			<div>
				{formHelperText}
			</div>
			</FormControl>

			<Button
				variant='contained'
				color='primary'
				onClick={ this.onButtonClick }
			>
			+
			</Button>
		</Grid> );
	}
}


export default InputItem
