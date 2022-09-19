import styles from 'styled-components'

export const Link = styles.a`
    border:1px solid #000;
    padding:15px;
    margin:25px auto;
    font-size:22px;
    display:flex;
    width:70vw;
    &:hover {
        background-color: #ccc;
        cursor:pointer;
        color: #00f

    }
`