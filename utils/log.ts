import * as FileSystem from 'expo-file-system';
import { getCurrentTime } from '@/utils/currenttime';
import settings from '@/config/settings.json';

export function startlog(){
    
    const currenttime = getCurrentTime();
    const logname = `${currenttime}_annotation.xml`;
    const logpath = `${FileSystem.documentDirectory}${logname}`;
    settings.tempLogPath = logpath; // Store the log path in settings for later use
    //TODO modulate header implementation to get all required settings
    const header = `
    <?xml version="1.0" encoding="UTF-8"?>\n
    <Moveanotation version=${settings.header.version} date="${currenttime}" baseName="${settings.header.baseName} usecase="${settings.header.usecase}" multi="${settings.header.multi}" flattened="${settings.header.flattened}">\n
    <UserProfile Id="${settings.user.Id}" Name="${settings.user.Name}" Sex="${settings.user.Sex}" Age="${settings.user.Age}" UnitPreference="${settings.user.UnitPreference}" Weight="${settings.user.Weight}" UnitPreference="${settings.user.UnitPreference}" Height="${settings.user.Height}" Handedness="${settings.user.Handedness}"/>\n
    `
    FileSystem.writeAsStringAsync(logpath, header)
    .then(() => {
        console.log('Log file created successfully at:', logpath);
    })
    .catch((error) => {
        console.error('Error creating log file:', error);
    });
    return logpath;
}
export function syncEvent(device : string, time : string){
    const logpath = settings.tempLogPath;
    const syncevent = `<sync>\n
    \t<phone name="${device}" time="${time}" />\n
    </sync>\n`;
    FileSystem.writeAsStringAsync(logpath, syncevent)
    .then(() => {
        console.log('Sync event logged successfully');
    })
    .catch((error) => {
        console.error('Error logging sync event:', error);
    });
}
export function annotEvent(label : string, time : string, duration : string){
    const logpath = settings.tempLogPath;
    const annotevent = `<event>\n
    \t<tag name="${label}" time="${time}" duration="${duration}"/>\n
    </event>\n`;
    FileSystem.writeAsStringAsync(logpath, annotevent)
    .then(() => {
        console.log('Sync event logged successfully');
    })
    .catch((error) => {
        console.error('Error logging sync event:', error);
    });
}