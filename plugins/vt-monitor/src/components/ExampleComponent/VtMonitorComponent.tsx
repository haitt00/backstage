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
  SupportButton, StatusOK, Button, StatusAborted, Table, CodeSnippet, TableColumn, TrendLine, StatusPending, Link,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';
import {discoveryApiRef, useApi} from "@backstage/core-plugin-api";
import {useEntity} from "@backstage/plugin-catalog-react";

export const VtMonitorComponent = () => {
  const discoverApi = useApi(discoveryApiRef);
  const proxyBackendBaseUrl = discoverApi.getBaseUrl('awsome-backend');

  const { entity } = useEntity();


  // const handleClick = async () => {
  //
  //
  //   console.log("Your click worked!!!")
  //   console.log(`${proxyBackendBaseUrl}/deploy`)
  //   const response = await fetch(`${await proxyBackendBaseUrl}/deploy`);
  //   console.log(await response.json())
  //   const data = response;
  //   return data;
  //   //
  //   //   if (loading) {
  //   //     return <Progress />;
  //   //   } else if (error) {
  //   //     return <Alert severity="error">{error.message}</Alert>;
  //   //   }
  //   // }
  // }
  const columns: TableColumn[] = [
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
    {
      title: 'Version',
      field: 'ver',
    },
    {
      title: '',
      field: 'ip',
      highlight: true,
    },
  ];
  const data: Array<{}> = [];
  data.push({
    ip: <Link to={'https://my-deployment-8b878b.apm.us-central1.gcp.cloud.es.io'}>Open</Link>,
    name: 'My deployment',
    stat: <StatusOK>UP</StatusOK>,
    ver: '8.6.1',
    stage: 'test'

  })
  data.push({
    ip: <Link to={'113.190.240.224'}>Open</Link>,
    name: 'metasohi',
    stat: <StatusOK>UP</StatusOK>,
    ver: '8.6.1'
  })



  const columns2: TableColumn[] = [
    {
      title: 'Name',
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
      title: 'Version',
      field: 'ver',
    },
  ];
  const data2: Array<{}> = [];
  data2.push({
    ip: <a href={'https://my-deployment-8b878b.apm.us-central1.gcp.cloud.es.io'}>Open</a>,
    name: 'My deployment',
    stat: <StatusOK>UP</StatusOK>,
    ver: '8.6.1'

  })
  data2.push({
    ip: <a href={'113.190.240.224'}>Open</a>,
    name: 'metasohi',
    stat: <StatusOK>UP</StatusOK>,
    ver: '8.6.1'
  })


  const containerStyle = { width: 700 };

  return (
  <Grid container spacing={3}>

    <Grid item md={4}>
      <InfoCard title={'Errors'}>
        <StatusAborted>
          0
        </StatusAborted>
        {/*<div style={containerStyle}>*/}
        {/*  <TrendLine data={[0.379, 0.331, 235, 245, 206, 278, 282]} title='abc'></TrendLine>*/}
        {/*</div>*/}
      </InfoCard>
    </Grid>

    <Grid item md={4}>
      <InfoCard title={'Slow requests'}>
        <StatusPending>
          319
        </StatusPending>
        {/*<div style={containerStyle}>*/}
        {/*  <TrendLine data={[0.379, 0.331, 235, 245, 206, 278, 282]} title='abc'></TrendLine>*/}
        {/*</div>*/}
      </InfoCard>
    </Grid>

    <Grid item md={4}>
      <InfoCard title={'Unique users'}>
        <StatusOK>
          2
        </StatusOK>
        {/*<div style={containerStyle}>*/}
        {/*  <TrendLine data={[0.379, 0.331, 235, 245, 206, 278, 282]} title='abc'></TrendLine>*/}
        {/*</div>*/}
      </InfoCard>
    </Grid>

    {/*<Grid item md={12}>*/}
    {/*  <Table*/}
    {/*    options={{paging:true}}*/}
    {/*    columns={columns2}*/}
    {/*    title="Your ELK deployments"*/}
    {/*    data={data2}*/}

    {/*  ></Table>*/}
    {/*</Grid>*/}

    <Grid item md={12}>
      <Table
        options={{paging:true}}
        columns={columns}
        title="Your ELK deployments"
        data={data}

      ></Table>
    </Grid>

  </Grid>
)};
