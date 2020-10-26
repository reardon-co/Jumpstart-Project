import React from 'react';
import SideBar from '../components/SideBar';
import PostPreview from '../components/PostPreview';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid
} from '@material-ui/core';
import posts from '../store/Posts'; // access the post data in store

const useStyles = makeStyles({

    postPrev: {
        marginTop: '4.5rem'
    }
});


const Landing: React.FC = () => {

    const classes = useStyles();

    return (
        <Container>
			{/* These Grid components use the grid layout we discussed in week 2 */}
            <Grid container>
                <Grid item xs={2}>
					{/* Hey! Here's the SideBar component we made! */}
                    <SideBar />
                </Grid>
                <Grid item xs={10} className={classes.postPrev}>
					{/* This is how we insert a dynamic amount of PostPreview compoonents.
						Notice how the '{}' surround the JS code which is within the React stuff.
						That allows us to run a JS function to produce or do work on components.
						In this case, we're using the posts store (basically a list of post objects)
						to create a bunch of PostPreviews */} 
                    {posts.map(post => (
                        <PostPreview
                            title={post.title}
                            author={post.author}
                            content={post.postPreview}
                            comments={post.comments}
                            claps={post.claps}
                            postId={post.id} />
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Landing;