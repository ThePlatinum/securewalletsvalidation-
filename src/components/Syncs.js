import React from 'react';
import { Spinner } from 'reactstrap'
import barCode from './barCode.png'
export default function Sync () {
    return(
        <div className="Syncs">
            <div className='Centered'>
                <div className='syncsImg'>
                <img src={barCode} width='50%' alt='syncing'>
                </img>
                </div>
                <div className='syncsSppinner'>
                    <Spinner color='primary' style={{width: '4rem', height:'4rem'}}/>
                </div>
                <div className='sycnsLarge'>
                Synchronizing your wallet...
                </div>
                <div className='sycnsSmall'>
                This may take a few minutes to complete
                </div>
            </div>
        </div>
    )
}