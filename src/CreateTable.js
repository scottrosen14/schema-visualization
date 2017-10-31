import React, { Component } from 'react';
import { render } from 'react-dom';
const ReactBsTable = require('react-bootstrap-table');
const BootstrapTable = ReactBsTable.BootstrapTable;
const TableHeaderColumn = ReactBsTable.TableHeaderColumn;


class CreateTable extends React.Component {

    render() {
        const cellEditProp = {
            mode: 'click'
        };
        
        let properties = [{
            properties: "id",
            types: "Integer"
        }, {
            properties: "name",
            types: "String"
        }];
        return (
            <BootstrapTable data={properties} cellEdit={cellEditProp}>
                <TableHeaderColumn row='0' colSpan='2' dataField='tableName' isKey>Table Name</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='properties'>Properties</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='types'>Types</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}
export default CreateTable;