import { Button, Flex, Grid, Text } from '@chakra-ui/react';
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
                <Flex flexDirection={'column'} className="mt-6">
                    <Text className="intro-text">
                        MQ<span className="b">B</span>W
                        <span className="e">E</span>RTYUIOP
                    </Text>
                    <Text className="intro-text">
                        ABRWORD<span className="d">Y</span>LGHIJ
                    </Text>
                    <Text className="intro-text">
                        TUVXNDOMY<span className="z">Z</span>LF
                    </Text>
                    <Flex
                        justifyContent={'space-between'}
                        fontFamily={'Dancing Script, cursive'}
                        fontSize={'30px'}
                        className="mt-12"
                    >
                        <Link
                            to=""
                            style={{
                                color: '#fff',
                                backgroundColor: '#E3651D',
                                width: '150px',
                                borderRadius: '20px',
                                padding: '10px',
                                textAlign: 'center'
                            }}
                        >
                            Login
                        </Link>
                        <Link
                            to="/play"
                            style={{
                                color: '#fff',
                                backgroundColor: '#000',
                                width: '150px',
                                borderRadius: '20px',
                                padding: '10px',
                                textAlign: 'center'
                            }}
                           
                        >
                            Play
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    );
};
export default Home;
