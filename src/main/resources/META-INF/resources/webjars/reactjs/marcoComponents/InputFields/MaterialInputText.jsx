/**
 * The InputText class uses the Generic InputElement component to
 * compose a standard input text field 
 */
class MaterialInputText extends React.Component{
    constructor(props){
        super(props)
        this.state = props.ixiProps;
    }
    
    handleChange(event){
        console.log(event.target.value);
        this.setState({value: event.target.value});
    }
    
    render(){
        return (
                <TextField 
                    id={this.state.id}
                    label={this.state.label} 
                    value={this.state.value} 
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                    helperText={this.state.help}
                />
        );
    }
}