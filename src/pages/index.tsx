import { dehydrate, useQuery } from "react-query";
import { queryClient, getDogs } from "../api";
import Link from "next/link";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

export async function getServerSideProps() {
  await queryClient.prefetchQuery("dogs", () => getDogs());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default function Home() {
  const { data } = useQuery(["dogs"], () => getDogs());
  // return <div>{JSON.stringify(data)}</div>;
  return (
    <div>
      <Grid container spacing={3}>
        {data?.dogs.map((dog, i) => (
          <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
            <Link href={`/dog/${dog.name}`} passHref>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={dog.image}
                alt={dog.name}
              />
              <CardContent>
                <Typography variant="h6">{dog.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {dog.weight} pound {dog.ageInWeeks} weeks old{" "}
                  {dog.sex.toLowerCase()} {dog.breed.toLowerCase()}
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
