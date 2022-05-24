import React, {useContext} from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const Notificaciones = () => {
const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (

<>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} está llamando:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Responder
          </Button>
        </div>
      )}
    </>
    )
}

export default Notificaciones