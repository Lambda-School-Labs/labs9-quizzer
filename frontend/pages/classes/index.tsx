import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "@emotion/styled";
import Link from "next/link";
import { Box, Flex } from "@rebass/emotion";
import ClassBox from "../../components/boxes/classBox/classBox";
import Layout from "../../components/Layout";
import securePage from "../../hocs/securePage";
import AddClass from "../../components/forms/AddClass";
import { ALL_CLASSES_QUERY } from "../../queries";
import { Container, Label } from "../../components/design-system";
import AddBox from '../../components/boxes/addBox/addBox';
import Modal from '../../components/Modal/index';
import ReactLoading from "react-loading";

const CardHolder = styled.div`
  display: flex;
  flexwrap: wrap;
  justify-content: flex-start;
  margin-top: 15px;
`;

const Holder = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ATag = styled.a`
  text-decoration: none;
`;

class Classes extends Component {
  render() {

    return (
      <>
        <Layout>
          <Box my={3} mx={5} py={3}>
            <Modal />
            <Label m={3} >Your Classes</Label>
            <CardHolder>
              <Holder>
                <ATag>
                  <AddBox onClick={e => { this.showModal() }} />
                </ATag>
                <Query query={ALL_CLASSES_QUERY}>
                  {({ loading, error, data }) => {
                    if (error) return <p>{error.message}</p>;
                    if (loading) {
                      return (
                        <ReactLoading
                          type="spin"
                          color="lightgray"
                          height="100px"
                          width="100px"
                        />
                      );
                    }
                    if (data) {
                      return data.class.map(c => (
                        <ClassBox key={c.id} className={c} />
                      ));
                    }
                  }}
                </Query>
              </Holder>
            </CardHolder>
          </Box>
        </Layout>
      </>
    )
  }
};

export default securePage(Classes);
