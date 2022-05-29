import styled from "styled-components"

export const TableStyled = styled.div`


    table {
        border: 0px solid #6d6b6b;
        border-collapse: collapse;  
        width: 1000px;
        height: 200px;
        color:#1f2349;
        font-size: 20px;
        
    }
        
    th {
        border-bottom: 1px solid #6d6b6b;
    }
        
    td {
        text-align: center;
        border-bottom: 1px solid #6d6b6b;
    }

    tr{
        border-bottom: 1px solid #6d6b6b;
        cursor:pointer;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }

    tr:hover {
        background-color: #D6EEEE;
        border-left:5px solid #6d6b6b;
    }


`