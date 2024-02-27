import React from "react";
import { dehydrate, useQuery } from "react-query";
import {
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import { queryClient, dogByName } from "@/api";

export async function getServerSideProps({ params }: any) {
  await queryClient.prefetchQuery("dog", () =>
    dogByName({ name: params.name })
  );
  return {
    props: {
      name: params.name,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DogDetail: React.FunctionComponent<{
  name: string;
}> = ({ name }: any) => {
  const { data } = useQuery("dog", () => dogByName({ name }));

  if (!data?.dog) {
    return <div> No Dog Found !!!!</div>;
  }
  return (
    //   <div>{JSON.stringify(data)}</div>;
    <Grid xs={12} md={6} lg={12}>
      <Card>
        <CardMedia
          component="img"
          width="140"
          height="140"
          image={data?.dog.image}
          alt={data?.dog.name}
        />
        <CardContent>
          <Typography variant="h6">{data.dog.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {data?.dog.weight}pound {data?.dog.ageInWeeks} weeks old {data?.dog.sex.toLowerCase()}{" "}
            {data?.dog.breed.toLowerCase()}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DogDetail;
