import React from 'react';
import {Card, CardContent, CardTitle} from '@react-md/card';
import { MediaContainer, MediaOverlay } from '@react-md/media';
import '../styles/highlights.css';



function Featured() {
  return (
    <section id="featrued">
       <Card>
        <MediaContainer fullWidth>
          <img src="https://picsum.photos/600/337?image=402" alt="" />
          <MediaOverlay>
            <CardTitle>Wow</CardTitle>
          </MediaOverlay>
        </MediaContainer>
        <CardContent>
          tets
        </CardContent>
      </Card>
    </section>
  );
}

export default Featured;