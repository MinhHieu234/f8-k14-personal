
import {
    Radio,
    RadioGroup,
    FormControlLabel,
} from '@mui/material';
import RootLayout from '../components/RootLayout';
import {
    Box, Grid, Paper, Typography, TextField,
    Button, MenuItem, Select, FormControl, InputLabel
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CreateExamPage = () => {
    return (
        <RootLayout>
            <Box sx={{ minHeight:  '100%', width: '100%'}}>
                <Grid container spacing={20} sx={{ width: '100%' }} alignItems="stretch">
                    {/* Bên trái */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                        <Box sx={{ width: '100%', mx: 'auto', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <Paper
                                sx={{
                                    p: 4,
                                    width: '100%',
                                    maxWidth: '100%',
                                    mx: 'auto',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Button variant="outlined" startIcon={<CloudUploadIcon />}>
                                    Tải lên từ máy
                                </Button>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* Bên phải */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                        <Box sx={{ width: '100%', mx: 'auto', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <Paper sx={{ p: 4, width: '100%', maxWidth: 500, mx: 'auto' }}>
                                <Grid container spacing={1}>
                                    {/* Dòng 1 */}
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Tên đề *"
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Mã đề *"
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>

                                    {/* Dòng 2 */}
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Thời gian làm bài (phút) *"
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            type="number"
                                            label="Số câu *"
                                            defaultValue={1}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>

                                    {/* Dòng 3 */}
                                    <Grid item xs={12}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Typography variant="subtitle1" sx={{ whiteSpace: 'nowrap' }}>
                                                Câu 1:
                                            </Typography>

                                            {/* Chọn 1 đáp án */}
                                            <FormControl sx={{ minWidth: 200 }}>
                                                <InputLabel shrink>Chọn 1 đáp án</InputLabel>
                                                <Select defaultValue="" displayEmpty>
                                                    <MenuItem value="" disabled>Chọn đáp án</MenuItem>
                                                    <MenuItem value="A">Đáp án A</MenuItem>
                                                    <MenuItem value="B">Đáp án B</MenuItem>
                                                    <MenuItem value="C">Đáp án C</MenuItem>
                                                    <MenuItem value="D">Đáp án D</MenuItem>
                                                </Select>
                                            </FormControl>

                                            {/* Radio lựa chọn */}
                                            <FormControl sx={{ ml: 2 }}>
                                                <RadioGroup row defaultValue="A" name="answer-radio">
                                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                                    <FormControlLabel value="C" control={<Radio />} label="C" />
                                                    <FormControlLabel value="D" control={<Radio />} label="D" />
                                                </RadioGroup>
                                            </FormControl>
                                            <Button fullWidth variant="contained" sx={{ height: '100%' }}>
                                                Tạo đề bài
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </RootLayout>
    );
};

export default CreateExamPage;
