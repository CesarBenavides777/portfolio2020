import React from 'react'
import {
   oprojects,
} from 'data/config'
import { Container, Card } from 'components/common'
import { Wrapper, Grid, Item, Content} from './styles'
import InstagramEmbed from 'react-instagram-embed'

export const OProjects = () => {

    return (
        <Wrapper as={Container} id="OProjects">
            <h2>Other Projects</h2>
            <Grid>
                <Item
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={oprojects.link}
                >
                    <Card>
                        <Content>
                            <h4>{oprojects.name}</h4>
                            <InstagramEmbed 
                                url="https://www.instagram.com/p/B67MumngE7H/"
                                containerTagName='div'
                                protocol=''
                                hideCaption={true}
                                maxWidth='100%'
                            />
                        </Content>
                    </Card>
                </Item>
            </Grid>
        </Wrapper>
    )
}


export default OProjects