/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import {Typography, Grid, Chip} from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton, StatusOK, Button, StatusAborted, Table, CodeSnippet, Select,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';
import {discoveryApiRef, useApi} from "@backstage/core-plugin-api";
import {useEntity} from "@backstage/plugin-catalog-react";

export const VtDeployComponent = () => {
  const discoverApi = useApi(discoveryApiRef);
  const proxyBackendBaseUrl = discoverApi.getBaseUrl('awsome-backend');

  const { entity } = useEntity();


  const handleClick = async () => {


    console.log("Your click worked!!!")
    console.log(`${proxyBackendBaseUrl}/deploy`)
    const response = await fetch(`${await proxyBackendBaseUrl}/deploy`);
    console.log(await response.json())
    const data = response;
    return data;
    //
    //   if (loading) {
    //     return <Progress />;
    //   } else if (error) {
    //     return <Alert severity="error">{error.message}</Alert>;
    //   }
    // }
  }
  const columns: TableColumn[] = [
    {
      title: 'IP',
      field: 'ip',
      highlight: true,
    },
    {
      title: 'Name',
      field: 'name',
    },
    {
      title: 'Status',
      field: 'stat',
    },
    {
      title: 'Stage',
      field: 'stage',
    },
  ];

  const columns2: TableColumn[] = [
    {
      title: 'STAGE',
      field: 'stage',
      highlight: true,
    },
    {
      title: 'Version',
      field: 'ver',
    },
    {
      title: 'Action',
      field: 'act',
    },
  ];

  const text = `# This configuration is intended for development purpose, it's **your** responsibility to harden it for production
version: '3.8'
services:
  myapp-postgresql:
    image: postgres:14.5
    # volumes:
    #   - ~/volumes/jhipster/myApp/postgresql/:/var/lib/postgresql/data/
    environment:
      - POSTGRES_USER=myApp
      - POSTGRES_PASSWORD=
      - POSTGRES_HOST_AUTH_METHOD=trust
    # If you want to expose these ports outside your dev PC,
    # remove the "127.0.0.1:" prefix
    ports:
      - 127.0.0.1:5433:5432 
`
  const data: Array<{}> = [];
  data.push({
    ip: '127.0.0.1',
    name: 'docker-desktop',
    stat: <StatusOK>UP</StatusOK>,
    stage: <Chip label='test'></Chip>
  })
  data.push({
    ip: '113.190.240.224',
    name: 'metasohi.com',
    stat: <StatusOK>UP</StatusOK>,
    stage: <Chip label='production'></Chip>

  })

  const SELECT_ITEMS = [
    {
      label: '50ab337',
      value: 'test_1',
    },
    {
      label: '557e9d8',
      value: 'test_2',
    },
  ]
  const data2: Array<{}> = [];
  data2.push({
    stage: <StatusOK>TEST</StatusOK>,
    ver: '50ab337',
    act:<><Select
    onChange={() => {}}
    placeholder="Pick a version"
    // label="Default"
    items={SELECT_ITEMS}
  />
      <Button color='primary' variant={'contained'}>DEPLOY</Button>
    </>


  })
  data2.push({
    stage: <StatusAborted>STAGING</StatusAborted>,
    // ver: '557e9d8',
    act: <><Select
      onChange={() => {}}
      placeholder="Pick a version"
      // label="Default"
      items={SELECT_ITEMS}
    />
      <Button color='primary' variant={'contained'}>DEPLOY</Button>
    </>
  })
  data2.push({
    stage: <StatusAborted>PRODUCTION</StatusAborted>,
    ver: '557e9d8',
    act: <><Select
      onChange={() => {}}
      placeholder="Pick a version"
      // label="Default"
      items={SELECT_ITEMS}
    />
      <Button color='primary' variant={'contained'}>DEPLOY</Button>
    </>
  })


  const link = {
    title:'Edit',
    link:'https://github.com/haitt00/postgres/blob/main/postgresql.yml'
  }

  return (
  <Grid container spacing={3}>
    <Grid item md={6}>
      <InfoCard title="Overview">
        {/*    /!*<Typography variant="body1">*!/*/}
        {/*    /!*  All content should be wrapped in a card like this.*!/*/}
        {/*    /!*</Typography>*!/*/}
        {/*    /!*{entity.metadata.name}*!/*/}

        {/*    <Button onClick={handleClick} color="primary" variant="contained">Deploy test</Button>*/}
        {/*    <Button onClick={handleClick} color="primary" variant="contained">Deploy staging</Button>*/}
        {/*    <Button onClick={handleClick} color="primary" variant="contained">Deploy production</Button>*/}
        <Table
          options={{
            search: false,
            paging: false,
            toolbar: false,
          }}
          data={data2}
          columns={columns2}
        />
      </InfoCard>

    </Grid>
    <Grid item md={6} xs={4}>
      <InfoCard title="Compose file" deepLink={link}>
        <CodeSnippet text={text} showLineNumbers showCopyCodeButton language={'javascript'}></CodeSnippet>
      </InfoCard>
    </Grid>
    <Grid item md={12}>
      <Table
        options={{paging:true}}
        columns={columns}
        title="Your Docker Engines"
        data={data}

      ></Table>
    </Grid>
    {/*<Grid item>*/}
    {/*  <ExampleFetchComponent />*/}
    {/*</Grid>*/}

  </Grid>
)};
