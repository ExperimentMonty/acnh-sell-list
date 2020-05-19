import React from "react";
import styled from "styled-components";

const Button = styled.button``
const DisabledButton = styled(Button)`
    opacity: 0.4
`

export default class HeaderToggle extends React.Component {

    render() {
        if (this.props.status) {
            return (
                <Button onClick={this.props.onClick}>
                    {this.props.title}
                </Button>
            )
        }
        else {
            return (
                <DisabledButton onClick={this.props.onClick}>
                    {this.props.title}
                </DisabledButton>
            )
        }

    }
}