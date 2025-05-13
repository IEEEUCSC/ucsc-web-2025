import React from 'react';

import { executiveCommittee, standingCommittee } from '@/utils';
import TeamMembers from './helpers/TeamMembers';

const Team = () => {
  return (
    <section className='my-20'>
        <div className=''>
            <h4 className='text-secondary-blue font-semibold text-8xl text-center uppercase'>Our Team</h4>
        </div>
        <TeamMembers 
            members={executiveCommittee}
            title="Executive Committee"
        />

        <TeamMembers 
            members={standingCommittee}
            title="Standing Committee"
        />
    </section>
  )
}

export default Team