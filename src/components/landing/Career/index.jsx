import React from 'react'
import {
    jobs,
} from 'data/config'
import { Container, Card } from 'components/common'
import { Wrapper, Grid, Item, Content } from './styles'

export const Career = () => {
    return (
        <Wrapper as={Container} id="Career">
            <h2>Career History</h2>
            <Grid>
                <Item>
                    <Card>
                        <Content>
                            <img src={jobs.T3.logo} />
                            <h4>{jobs.T3.title}</h4>
                            <a
                                href={jobs.T3.link}
                                target="_blank"
                                rel="noopner noreferer"
                                aria-label={`T3 Job Link`}
                            ><p>{jobs.T3.company}</p></a>
                            <p> {jobs.T3.description}</p>
                        </Content>
                    </Card>
                </Item>
                <Item>
                    <Card>
                        <Content>
                            <img src={jobs.NT.logo} />
                            <h4>{jobs.NT.title}</h4>
                            <a
                                href={jobs.NT.link}
                                target="_blank"
                                rel="noopner noreferer"
                                aria-label={`NT Job Link`}
                            ><p>{jobs.NT.company}</p></a>
                            <p> {jobs.NT.description}</p>
                        </Content>
                    </Card>
                </Item>
            </Grid>
        </Wrapper>
    )

}