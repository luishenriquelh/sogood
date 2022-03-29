import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    background-color: #b281db;
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }
        .logo{
            flex: 1;
            img{
                width: 52px;
            }
        }

        nav{

            ul{
                display: flex;
            }
                li{
                    list-style: none;
                    margin-left: 20px;
                }
        }

`;
