import { Flex, Grid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
    const grid = [1, 2, 3, 4, 5];
    return (
        <div>
            <Flex p={'10em'} justifyContent={'space-between'}>
                <Flex>
                    {grid.map((g, index) => {
                        return (
                            <>
                                <Grid
                                    templateColumns="repeat(5, 1fr)"
                                    gap={0}
                                    key={g}
                                    className="row"
                                    display={'block'}
                                >
                                    <div
                                        className={
                                            index % 2 === 0 ? 'orange' : 'black'
                                        }
                                    ></div>
                                    <div
                                        className={
                                            index % 2 === 0 ? 'black' : 'grey'
                                        }
                                    ></div>
                                    <div
                                        className={
                                            index % 2 === 0 ? 'grey' : 'orange'
                                        }
                                    ></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </Grid>
                            </>
                        );
                    })}
                </Flex>
                <Flex
                    flexDirection={'column'}
                    className="mt-6"
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text className="intro-text">MQWRTYUIOPJ</Text>
                    <Text className="intro-text">ABRWORDLGHI</Text>
                    <Text className="intro-text">TUVXNDOMYLF</Text>

                    <Link to="/play" className="mt-6 play">
                        PLay
                    </Link>
                </Flex>
            </Flex>
        </div>
    );
};
export default Home;
