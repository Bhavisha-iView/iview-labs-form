import Select from 'react-select';



export const DropDown = (props) => {

    console.log(props)
    return (
        <Select name={props.companySizeName} className='field-data-input' id={props.id} placeholder="Type or select an option"  options={props.options} onChange={props.handleDropDownChange} />
    )
};
