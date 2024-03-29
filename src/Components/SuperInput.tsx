import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';


export type SuperInputType = {
    add: (inputValue: string) => void
    disabled?: boolean
}


export const SuperInput: React.FC<SuperInputType> = memo(({add, disabled, ...props}) => {


    let [inputValue, setInputValue] = useState('')

    let [error, setError] = useState<null | string>('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const addTaskHandler = () => {
        if (inputValue.trim() !== '') {
            add(inputValue.trim())
        } else (setError('Title is required'))
        setInputValue('')
    }


    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
        if (error) {
            setError('')
        }

    }

    const ButtonStyle = {
        maxWidth: '38px',
        maxHeight: '38px',
        minWidth: '38px',
        minHeight: '38px'
    }
    return (
        <span>

              <TextField
                  // className={error ? s.error : ''} onChange={onChangeInput} onKeyPress={onKeyPress}
                  error={!!error}
                  value={inputValue}
                  size='small'
                  id="outlined-textarea"
                  label={error ? error : "Write Text"}
                  placeholder="Write Text"
                  disabled={disabled}
                  onChange={onChangeInput}
                  onKeyDown={onKeyDown}
              />
            <Button variant="contained"
                    style={ButtonStyle}
                    onClick={addTaskHandler}
                    disabled={disabled}
            >+</Button>

        </span>
    );
})

