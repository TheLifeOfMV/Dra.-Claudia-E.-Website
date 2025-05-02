import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferred_date: string;
  preferred_time: string;
  reason: string;
  notes?: string;
}

const Form = styled.form`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.default};
  padding: ${props => props.theme.spacing.lg};
`;

const FormTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.md};
  color: black;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.fontFamily};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.fontFamily};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.fontFamily};
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: ${props => props.theme.spacing.xs};
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: ${props => props.theme.borderRadius};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    opacity: 0.9;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: #e6f7f4;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`;

const BookingForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/appointments`, data);
      
      if (response.status === 200 || response.status === 201) {
        setSubmitSuccess(true);
        reset();
      }
    } catch (error) {
      setSubmitError('An error occurred while submitting your request. Please try again later.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Agendar Cita</FormTitle>
      
      {submitSuccess && (
        <SuccessMessage>
          Gracias por tu solicitud de cita! Nos pondremos en contacto contigo pronto para confirmar tu cita.
        </SuccessMessage>
      )}
      
      {submitError && (
        <ErrorMessage>{submitError}</ErrorMessage>
      )}
      
      <FormRow>
        <FormGroup>
          <Label htmlFor="name">Nombre completo</Label>
          <Input
            id="name"
            type="text"
            placeholder="Tu nombre completo"
            {...register("name", { required: 'El nombre es requerido' })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Tu correo electrónico"
            {...register("email", { 
              required: 'El correo electrónico es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>
      </FormRow>
      
      <FormRow>
        <FormGroup>
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Tu número de teléfono"
            {...register("phone", { 
              required: 'El número de teléfono es requerido',
              minLength: {
                value: 10,
                message: 'El número de teléfono es demasiado corto'
              }
            })}
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="preferred_date">Fecha preferida</Label>
          <Input
            id="preferred_date"
            type="date"
            {...register("preferred_date", { required: 'Por favor selecciona una fecha' })}
          />
          {errors.preferred_date && <ErrorMessage>{errors.preferred_date.message}</ErrorMessage>}
        </FormGroup>
      </FormRow>
      
      <FormRow>
        <FormGroup>
          <Label htmlFor="preferred_time">Hora preferida</Label>
          <Select
            id="preferred_time"
            {...register("preferred_time", { required: 'Por favor selecciona una hora' })}
          >
            <option value="">Selecciona una hora</option>
            <option value="Morning (9:00 AM - 12:00 PM)">Mañana (9:00 AM - 12:00 PM)</option>
            <option value="Afternoon (1:00 PM - 5:00 PM)">Tarde (1:00 PM - 5:00 PM)</option>
          </Select>
          {errors.preferred_time && <ErrorMessage>{errors.preferred_time.message}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="reason">Motivo de la visita</Label>
          <Select
            id="reason"
            {...register("reason", { required: 'Por favor selecciona un motivo' })}
          >
            <option value="">Selecciona un motivo</option>
            <option value="General Consultation">Consulta General</option>
            <option value="Minimally Invasive Surgery">Cirugía Minimamente Invasiva</option>
            <option value="Laparoscopic Surgery">Cirugía Laparoscópica</option>
            <option value="Hernia Repair">Reparación de Hernia</option>
            <option value="Gallbladder Surgery">Cirugía de Víscera</option>
            <option value="Other">Otro</option>
          </Select>
          {errors.reason && <ErrorMessage>{errors.reason.message}</ErrorMessage>}
        </FormGroup>
      </FormRow>
      
      <FormGroup>
        <Label htmlFor="notes">Notas adicionales (Opcional)</Label>
        <TextArea
          id="notes"
          placeholder="Por favor proporciona cualquier información adicional que pueda ser útil"
          {...register("notes")}
        />
      </FormGroup>
      
      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Solicitar Cita'}
      </SubmitButton>
    </Form>
  );
};

export default BookingForm; 